import { realpathSync, readFileSync } from "fs";
export class NewPayload {
  private data: Buffer;

  constructor(data: Buffer) {
    this.data = data;
  }

  public getData(): Buffer {
    return this.data;
  }

  public static fromBuffer(buffer: Buffer): Buffer {
    return Buffer.from(buffer);
  }

  public toBuffer(): Buffer {
    return this.data;
  }

  public static fromString(string: string): Buffer {
    return Buffer.from(string);
  }

  public toString(encoding: BufferEncoding = "utf8"): string {
    return this.data.toString(encoding);
  }

  public static fromJson(json: object): Buffer {
    return Buffer.from(JSON.stringify(json));
  }

  public toJson(): object {
    return JSON.parse(this.data.toString());
  }

  public static fromPath(path: string): Buffer {
    const realPath = realpathSync(path);
    const contents = readFileSync(realPath);
    return Buffer.from(contents);
  }

  public toFile(fileName: string): File {
    if (!fileName) {
      fileName = "code.tar.gz";
    }
    const blob = new Blob([this.data]);
    return new File([blob], fileName);
  }
}
