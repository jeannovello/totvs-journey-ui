import ora from "ora"

export function spinner(
  text: string,
  options?: {
    silent?: boolean
  }
) {
  return ora({
    text,
    isSilent: options?.silent,
  })
}