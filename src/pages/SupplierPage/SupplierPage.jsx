import { Users } from "lucide-react";
import SidebarMain from "@/components/SidebarMain/SidebarMain";
import SearchBar from "@/components/SearchBar/SearchBar";
import { TableProducts } from "@/pages/ProductPage/components/TableProducts/TableProducts";
import DialogRegisterSupplier from "@/pages/SupplierPage/components/DialogRegisterSupplier/DialogRegisterSupplier";

export default function SupplierPage() {
 return(
  <main className="main-product-page flex bg-[#F8F7F9] h-full  items-center justify-start w-full ">
      <SidebarMain />

      <section className="product-actions-area bg-[#F8F7F9] flex  justify-start w-[100%] h-[100vh]">
        <div className="header-product-page-and-search  p-2  h-[25%] flex flex-row flex-wrap gap-1  justify-start ">
          <div className="header-title flex flex-col justfy-start items-start ">
            <h1 className="text-3xl font-bold pt-10 flex gap-2 items-center justify-start">
              <Users size={35} color="#3066FA" /> Fornecedores
            </h1>
            <small className="text-gray-600">
              Gerencie seus Fornecedores e informações de contato
            </small>
          </div>
          <div className="dialog-component relative left-[70%] top-15">
            <DialogRegisterSupplier  />
          </div>
          <section className="search-card bg-[#FFFFFF] h-[10vh] w-[85vw] p-5 flex items-center justify-start mt-2 rounded-2xl border border-gray-200">
            <SearchBar placeholder={"Pesquisar fornecedores por nome ou CNPJ/CPF..."} />
          </section>
          <section className="product-list-area bg-[#FFFFFF] h-[60vh] w-[100%] p-5 flex flex-col items-start justify-start mt-5 rounded-2xl border border-gray-200">
              <div className="product-list-header mb-8">
                <h1 className="product-list-title font-bold text-2xl">
                  Lista de Fornecedores
                </h1>
                <small className="product-list-subtitle text-gray-600 ">
                  1 fornecedor(es) encontrado(s)
                </small>
              </div>
              <TableProducts/>
          </section>
        </div>
      </section>
    </main>
 )
}
