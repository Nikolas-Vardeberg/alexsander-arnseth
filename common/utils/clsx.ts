export const clsx = (...args: (string | undefined | null)[]) => {
    return `${args.filter(Boolean).join(" ")}`
}