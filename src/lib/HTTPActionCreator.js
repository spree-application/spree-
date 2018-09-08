export default class HTTPAction {
  static Custom = action => new HTTPAction(action);

  static Default = action => new HTTPAction(action)
    .withSuccessFlow()
    .withErrorFlow();

  constructor({ action, request }) {
    this.action = action;
    this.request = request;
    this.flowHandlers = [];
  }

  withRequest(request) {
    this.request = request;
    return this;
  }

  withPayload(payload) {
    this.responseFormat = payload;
    return this;
  }

  withSuccessFlow(handler) {
    this.flowHandlers = {
      ...this.flowHandlers,
      SUCCESS: {
        suffix: 'SUCCESS',
        priority: 1,
        condition: response => response.status >= 200 && response.status < 400,
        handler
      }
    };
    return this;
  }

  withErrorFlow(handler) {
    this.flowHandlers = {
      ...this.flowHandlers,
      ERROR: {
        suffix: 'ERROR',
        priority: 1,
        condition: response => response.status >= 400,
        handler
      }
    };
    return this;
  }

  withCustomFlow(flow) {
    this.flowHandlers = {
      ...this.flowHandlers,
      [flow.suffix]: flow
    };
    return this;
  }
}
