import type {EventHandlerRequest, H3Event} from "h3";

export const useIdGetterFromQuery = (event: H3Event<EventHandlerRequest>): number => {
    const query = getQuery(event);
    return parseInt(<string>query.id);
}
