export function trimAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function getValidAmountRegex(decimals: number) {
  return new RegExp(`^\\d*(?:\\.\\d{0,${decimals}})?$`);
}