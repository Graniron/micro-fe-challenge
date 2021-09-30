/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonType } from "./components/ui-button/ui-button-types";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface UiButton {
        /**
          * Whether button should be disabled
         */
        "disabled": boolean;
        /**
          * Type of the button
         */
        "type"?: ButtonType;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLUiButtonElement extends Components.UiButton, HTMLStencilElement {
    }
    var HTMLUiButtonElement: {
        prototype: HTMLUiButtonElement;
        new (): HTMLUiButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "ui-button": HTMLUiButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface UiButton {
        /**
          * Whether button should be disabled
         */
        "disabled"?: boolean;
        /**
          * Type of the button
         */
        "type"?: ButtonType;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "ui-button": UiButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ui-button": LocalJSX.UiButton & JSXBase.HTMLAttributes<HTMLUiButtonElement>;
        }
    }
}
