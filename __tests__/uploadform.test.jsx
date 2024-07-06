import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UploadForm from "@/components/UploadForm";

describe("UploadForm", () => {
  it("should have input file element", () => {
    render(<UploadForm />);
    const input = screen.getByTestId("geojson-input");
    expect(input).toBeInTheDocument();
  });

  it("should upload file happily", async () => {
    render(<UploadForm />);
    const file2Upload = new File(["geo-dummy"], "geo.json", {
      type: "application/json",
    });
    const input = screen.getByTestId("geojson-input");
    await userEvent.upload(input, file2Upload);
    expect(input.files.length).toBe(1);
  });

  it("should show error message if upload non json file", async () => {
    render(<UploadForm />);
    const file2Upload = new File(["geo-dummy"], "geo.txt", {
      type: "plain/text",
    });
    const input = screen.getByTestId("geojson-input");
    await userEvent.upload(input, file2Upload);
    expect(input.files.length).toBe(1);
    const warningmessage = screen.getByTestId("warning-msg");
    expect(warningmessage.textContent).toBe(
      "invalid input, please uplaod json file"
    );
  });

  it("should not show submit button if file type is invalid", async () => {
    render(<UploadForm />);
    const file2Upload = new File(["geo-dummy"], "geo.txt", {
      type: "plain/text",
    });
    const input = screen.getByTestId("geojson-input");
    await userEvent.upload(input, file2Upload);
    expect(input.files.length).toBe(1);
    expect(screen.queryByText("Submit")).toBeNull();
  });

  it("should show submit button if file type is valid", async () => {
    render(<UploadForm />);
    const file2Upload = new File(["geo-dummy"], "geo.json", {
      type: "application/json",
    });
    const input = screen.getByTestId("geojson-input");
    await userEvent.upload(input, file2Upload);
    expect(input.files.length).toBe(1);
    const warningmessage = screen.getByTestId("warning-msg").toBeNull();
    expect(screen.queryByText("Submit")).toBeInTheDocument();
  });
});
