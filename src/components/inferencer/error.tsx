import React from "react";

import { Alert, Row, Col } from "@pankod/refine-antd";
import {CreateInferencerConfig} from "@pankod/refine-inferencer";


export const ErrorComponent: CreateInferencerConfig["errorComponent"] = ({
    error,
}) => {
    if (error) {
        return (
            <Row justify="center" align="middle" style={{ minHeight: "200px" }}>
                <Col>
                    <Alert
                        message="Error"
                        description={
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: error ?? "",
                                }}
                            />
                        }
                        type="error"
                        showIcon
                    />
                </Col>
            </Row>
        );
    }

    return null;
};
