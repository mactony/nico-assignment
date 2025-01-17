import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SearchBar() {
  async function search(formData: FormData) {
    "use server";
    const search_by = formData.get("search_by");
    const search = formData.get("search");

    console.log(`search_by: ${search_by}, search: ${search}`);
  }
  return (
    <form action={search}>
      <div className="flex flex-col sm:flex-row w-full space-y-2 md:space-y-0 lg:max-w-lg sm:items-center sm:space-x-2">
        <p className="text-slate-500 text-sm min-w-[70px]">Search by:</p>
        <Select name="search_by">
          <SelectTrigger className="w-full lg:w-[400px]">
            <SelectValue placeholder="keyword" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="title">Title</SelectItem>
            <SelectItem value="category">Category</SelectItem>
          </SelectContent>
        </Select>

        <Input type="search" placeholder="Search..." name="search" />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
