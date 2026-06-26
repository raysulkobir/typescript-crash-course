interface BasicTypes {
  stringType: string;
  numberType: number;
  booleanType: boolean;
  arrayType: number[];
  tupleType: [number, string, boolean];
  other: any;
}

const basicTypes: BasicTypes = {
  stringType: "This is a string ddd",
  numberType: 42,
  booleanType: true,
  arrayType: [1, 2, 3],
  tupleType: [1, "two", true],
  other:10,
};

export default basicTypes;