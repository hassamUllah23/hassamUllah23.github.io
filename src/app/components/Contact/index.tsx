import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";

type Props = {};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (_data: any) => {
    openEmailClient();
  };

  const emailRegister = register("email", {
    required: true,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  });

  const messageRegister = register("message", {
    required: true,
  });

  const openEmailClient = () => {
    window.location.href = `mailto:${encodeURIComponent(
      "malikhassamullah1@yahoo.com",
    )}`;
  };

  return (
    <Element name="contact">
      <div
        id="contact"
        className="flex flex-col gap-2 items-center justify-center overflow-auto"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-4"
        >
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row w-full gap-3 flex-wrap md:flex-nowrap">
              <Input
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                onClear={() => console.log("clear")}
                errorMessage={errors.email && "Invalid email address"}
                validationState={errors.email ? "invalid" : "valid"}
                style={{ backgroundColor: "black" }}
                {...emailRegister}
              />
              <Input
                id="subject"
                label="Subject"
                placeholder="Enter email subject"
                variant="bordered"
                onClear={() => console.log("clear")}
                validationState={errors.email ? "invalid" : "valid"}
                style={{ backgroundColor: "black" }}
              />
            </div>

            <Textarea
              label="Message"
              variant="bordered"
              placeholder="Write here..."
              style={{ backgroundColor: "black" }}
              errorMessage={errors.email && "Message Required"}
              validationState={errors.message ? "invalid" : "valid"}
              {...messageRegister}
            />
          </div>

          <div className="flex items-center gap-4 w-full">
            <Button
              type="submit"
              variant="flat"
              href="mailto:recipient@example.com"
              className="w-full"
            >
              Get in touch
            </Button>
          </div>
        </form>
      </div>
    </Element>
  );
}

export { Contact };
