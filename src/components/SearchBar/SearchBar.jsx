import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
export default function SearchBar({placeholder}) {
  return (
          <div className= "search-bar-component">
               <InputGroup className="w-[40vw]">
              <InputGroupInput placeholder={placeholder} />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
            </InputGroup>
        </div>

  )
}
