import React from "react";
import { IBaseComponentProps } from "../../typings/components";
export interface ITestProps extends IBaseComponentProps {
    /**
     * 标题
     */
    title: React.ReactNode;
    /**
     * 内容
     */
    content: React.ReactNode;
}
/**
 * 展示标题和内容
 */
export declare const Test: {
    (props: ITestProps): JSX.Element | null;
};
