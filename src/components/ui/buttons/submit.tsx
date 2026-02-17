import { Button } from "@mantine/core";
import { useFormStatus } from "react-dom";

export function SubmitButton({children}: Readonly<{children: React.ReactNode;}>) {
    const { pending } = useFormStatus();
    return <Button type="submit" disabled={pending} loading={pending} loaderProps={{ type: 'dots' }}>{children}</Button>;
}