import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import DialogDelete from "../DialogDelete/DialogDelete";
import { DialogEdit } from "../DialogEdit/DialogEdit";
const products = [
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },
  {
    sku: "INV001",
    name: "Paid",
    category: "Eletronic",
    supplier: "Credit Card",
    salePrice: "2.500,00",
    stock: 20,
    status: "Atenção",
  },

]

export function TableProducts() {
  return (
    <Table>
      <TableCaption>Lista de produtos cadastrados</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SKU</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Fornecedor</TableHead>
          <TableHead>Preço Venda</TableHead>
          <TableHead>Estoque</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((prod) => (
          <TableRow key={prod.sku}>
            <TableCell className="font-medium">{prod.sku}</TableCell>
            <TableCell>{prod.name}</TableCell>
            <TableCell>{prod.category}</TableCell>
            <TableCell>{prod.supplier}</TableCell>
            <TableCell>{prod.salePrice}</TableCell>
            <TableCell>{prod.stock}</TableCell>
            <TableCell>{prod.status}</TableCell>
           <TableCell className="text-right flex gap-1 justify-end">
             <DialogEdit/> <DialogDelete/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
