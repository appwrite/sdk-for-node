class Query {
  static async equal(attribute, value) {
    Query.addQuery(attribute, "equal", value);
    }

  static async notEqual(attribute, value) {
    Query.addQuery(attribute, "notEqual", value);
    }

  static async lesser(attribute, value) {
    Query.addQuery(attribute, "lesser", value);
    }

  static async lesserEqual(attribute, value) {
    Query.addQuery(attribute, "lesserEqual", value);
    }

  static async greater(attribute, value) {
    Query.addQuery(attribute, "greater", value);
    }

  static async greaterEqual(attribute, value) {
    Query.addQuery(attribute, "greaterEqual", value);
    }

  static async search(attribute, value) {
    Query.addQuery(attribute, "search", value);
    }

  static async addQuery(attribute, oper, value) {
    value instanceof Array
      ? `${attribute}.${oper}(${value
          .map((v) => Query.parseValues(v))
          .join(",")})`
      : `${attribute}.${oper}(${Query.parseValues(value)})`;
    }

  static async parseValues(value) {
    typeof value === "string" || value instanceof String
      ? `"${value}"`
      : `${value}`;
    }
}

module.exports = Query;
