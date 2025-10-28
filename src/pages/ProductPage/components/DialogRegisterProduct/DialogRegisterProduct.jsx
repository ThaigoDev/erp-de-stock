import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import  SearchSelect from "../SearchSelect/SearchSelect";
export function DialogRegisterProduct() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="default" className="bg-[#527CEF]">
            <Plus /> Novo Produto
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[50vw]">
          <DialogHeader>
            <DialogTitle>Cadastrar Produto</DialogTitle>
            <DialogDescription>
              Preencha os detalhes do novo produto abaixo. Clique em salvar para
              adicionar ao catálogo.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="grid gap-3">
              <Input id="name-1" name="productSKU" defaultValue="SKU-INV001" />
            </div>
            <div className="grid gap-3">
              <Input id="name-1" name="productName" defaultValue="Nome do Produto" />
            </div>
            <SearchSelect labelSelect={"Selecione a Categoria..."} />
            <SearchSelect labelSelect={"Selecione o Fornecedor..."} />
            <div className="grid gap-3">
              <Input id="username-1" name="salePrice" type={Number} defaultValue={2000} />
            </div>
            <div className="grid gap-3">
              <Input id="username-1" name="username" defaultValue="Valor de Estoque" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
