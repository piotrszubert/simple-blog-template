import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ThemeToggle } from "@/components/themeToggle";
import { useTheme } from "next-themes";

export default function SettingsCard() {
    const { theme } = useTheme()
    
    return(
        <Card>
            <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Configure your preferences</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-3">
                    Current theme:  {theme}
                    <ThemeToggle/>
                </div>
            </CardContent>
        </Card>
    );
}