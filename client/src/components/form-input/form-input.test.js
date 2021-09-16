import React from "react";
import { shallow } from "enzyme";

import FormInput from "./form-input.component";

describe("FormInput component", () => {
  let wrapper;
  let mockHandleChange;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: "email",
      value: "test@mail.com",
      handleChange: mockHandleChange,
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it("should render FormInput component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleChange method when input changes", () => {
    wrapper.find("FormInputContainer").simulate("change");
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it("should not render FormInputLabel if there is no label", () => {
    const mockNewProps = {
      label: "",
      value: "test@email.com",
      handleChange: mockHandleChange,
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists("FormInputLabel")).toBe(false);
  });
});
