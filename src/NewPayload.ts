import { realpathSync, readFileSync } from "fs";
export class NewPayload {
  private data: any;

  constructor(data: any) {
    this.data = data;
  }

  // converts JSON to binary data (Buffer)
  static async fromJson(json: object): Promise<NewPayload> {
    const jsonString = JSON.stringify(json);
    const encoder = new TextEncoder();
    const buffer = encoder.encode(jsonString);
    return new NewPayload(buffer);
  }

  // converts file to binary data (Buffer)
  static fromPath(path: string): NewPayload {
    const realPath = realpathSync(path);
    const contents = readFileSync(realPath);
    return new NewPayload(new Uint8Array(contents));
  }

  // converts text to binary data (Buffer)
  static async fromPlainText(text: string): Promise<NewPayload> {
    const arrayBytes = new TextEncoder().encode(text);
    return new NewPayload(arrayBytes);
  }

  async fromBinary(): Promise<NewPayload> {
    return new NewPayload(this.data);
  }

  // converts binary data (Buffer) to JSON
  async toJson(): Promise<any> {
    const decoder = new TextDecoder();
    const jsonString = decoder.decode(this.data);
    return JSON.parse(jsonString);
  }

  // convert binary data (Buffer) to file
  async toFile(fileName: string): Promise<File> {
    const blob = new Blob([this.data]);
    return new File([blob], fileName);
  }

  // converts binary data (Buffer) to text
  async toPlainText(): Promise<string> {
    const decoder = new TextDecoder();
    return decoder.decode(this.data);
  }

  toBinary(): Uint8Array {
    return Uint8Array.from(this.data);
  }

  public getData(): any {
    return this.data;
  }
}
