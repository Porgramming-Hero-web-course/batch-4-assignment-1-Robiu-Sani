function retrievePropertyValueTest<
  ObjectType,
  PropertyKey extends keyof ObjectType
>(
  objectInstance: ObjectType,
  propertyName: PropertyKey
): ObjectType[PropertyKey] {
  return objectInstance[propertyName];
}
