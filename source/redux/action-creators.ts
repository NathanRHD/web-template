export interface ActionCreator<Type, TBody> {
    // The value of the action's type property
    type: Type;

    // The typings of (i.e. typeof) the actions created
    typeRef: { type: Type } & TBody;

    // The method to build a new action based on the values you provide
    create: (body: TBody) => { type: Type } & TBody;
}

// Pass in the type of a dictionary of action creators to build a union of the typings of (i.e. typeof) actions
export type ActionUnion<
    ActionCreators extends {
        [key: string]: ActionCreator<any, any>;
    }
> = ActionCreators[keyof ActionCreators]["typeRef"];

// The factory to build new action creators based on the definitions you provide
export const actionCreatorFactory = <Type extends string>(type: Type) => {
    return <TBody>(): ActionCreator<Type, TBody> => ({
        type,
        typeRef: undefined,
        create: (body: TBody): { type: Type } & TBody => ({ type, ...body as any })
    });
};  