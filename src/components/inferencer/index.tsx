import React from "react";
import { ResourceRouterParams, useRouterContext } from "@pankod/refine-core";

import { ShowInferencer } from "./show";
import { ListInferencer } from "./list";
import { CreateInferencer } from "./create";
import { EditInferencer } from "./edit";
import {InferencerComponentProps} from "@pankod/refine-inferencer";

const AntdInferencer: React.FC<InferencerComponentProps> = ({
    action: actionFromProps,
    id: idFromProps,
    ...props
}) => {
    const { useParams } = useRouterContext();
    const { action, id } = useParams<ResourceRouterParams>();

    switch (actionFromProps ?? action) {
        case "show":
            return <ShowInferencer {...props} id={idFromProps ?? id} />;
        case "create":
            return <CreateInferencer {...props} id={idFromProps ?? id} />;
        case "edit":
            return <EditInferencer {...props} id={idFromProps ?? id} />;
        default:
            return <ListInferencer {...props} id={idFromProps ?? id} />;
    }
};

export { AntdInferencer };
export {
    ShowInferencer as AntdShowInferencer,
    renderer as AntdShowRenderer,
} from "./show";
export {
    EditInferencer as AntdEditInferencer,
    renderer as AntdEditRenderer,
} from "./edit";
export {
    ListInferencer as AntdListInferencer,
    renderer as AntdListRenderer,
} from "./list";
export {
    CreateInferencer as AntdCreateInferencer,
    renderer as AntdCreateRenderer,
} from "./create";
export * from "./types";
