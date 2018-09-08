const requestMiddleware = store => next => async (fullAction) => {
  const {
    action, request, flowHandlers, responseFormat
  } = fullAction;

  if (request && action) {
    store.dispatch(action);
    let response;
    try {
      response = await request(action);
    } catch (e) {
      response = e;
    } finally {
      const flowsMap = Object.values(flowHandlers);
      const passedFlows = flowsMap.filter(flow => flow.condition(response));
      const topPriority = Math.max.apply(null, passedFlows.map(flow => flow.priority));
      const passedFlow = passedFlows.find(flow => flow.priority === topPriority);
      // transform response
      response = responseFormat && response.ok
        ? await response[responseFormat]()
        : response;
      // -
      // callback
      if (passedFlow.handler) {
        store.dispatch(passedFlow.handler(action, response));
      }
      // -
      store.dispatch({
        type: `${action.type}_${passedFlow.suffix}`,
        payload: response
      });
    }
  } else {
    next(fullAction);
  }
};

export default requestMiddleware;
