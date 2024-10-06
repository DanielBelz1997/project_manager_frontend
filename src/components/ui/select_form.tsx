import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectForm() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="בחר שייכות לקבוצה" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">מיצוי</SelectItem>
        <SelectItem value="light">כללי</SelectItem>
        <SelectItem value="dark">אנחנו</SelectItem>
        <SelectItem value="system">ווב</SelectItem>
      </SelectContent>
    </Select>
  );
}

