// Unit tests for: createContact

import { axiosInstance } from "@/api/axiosInstance";
import { createContact } from "../createContact";

// Mocking axiosInstance
jest.mock("../../axiosInstance", () => ({
  axiosInstance: {
    post: jest.fn(),
  },
}));

// Mocking contactSchema
class MockSchema {
  public schema = {
    parse: jest.fn(),
  };
}

const MockcontactSchema = new MockSchema();

describe("createContact() createContact method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Tests
  it("should successfully create a contact with valid data", async () => {
    // Arrange
    const mockContactData = {
      name: "name",
      email: "email@gmail.com",
      title: "string",
      messageBody: "string",
    };
    (axiosInstance.post as jest.Mock).mockResolvedValue({
      data: { id: 1, ...mockContactData },
    });

    // Act
    const result = await createContact(mockContactData);

    // Assert
    expect(axiosInstance.post).toHaveBeenCalledWith(
      "/contact",
      mockContactData
    );
    expect(result).toEqual({ id: 1, ...mockContactData });
  });

  // Edge Case Tests
  it("should throw an error when axiosInstance.post fails", async () => {
    // Arrange
    const mockContactData = {
      name: "name",
      email: "email@gmail.com",
      title: "string",
      messageBody: "string",
    };
    const errorMessage = "Network Error";
    (axiosInstance.post as jest.Mock).mockRejectedValue(
      new Error(errorMessage) as never
    );

    // Act & Assert
    await expect(createContact(mockContactData)).rejects.toThrow(
      `Failed to create contact. message: Error: ${errorMessage}`
    );
  });

  it("should handle empty contact data gracefully", async () => {
    // Arrange
    const mockContactData = {} as any;
    (axiosInstance.post as jest.Mock).mockResolvedValue({
      data: { id: 2, ...mockContactData },
    });

    // Act
    const result = await createContact(mockContactData);

    // Assert
    expect(axiosInstance.post).toHaveBeenCalledWith(
      "/contact",
      mockContactData
    );
    expect(result).toEqual({ id: 2, ...mockContactData });
  });

  it("should handle invalid contact data according to schema", async () => {
    // Arrange
    const mockContactData = { name: "", email: "invalid-email" } as any;
    (MockcontactSchema.schema.parse as jest.Mock).mockImplementation(() => {
      throw new Error("Invalid data");
    });

    // Act & Assert
    await expect(createContact(mockContactData)).rejects.toThrow(
      "Invalid data"
    );
  });
});

// End of unit tests for: createContact
