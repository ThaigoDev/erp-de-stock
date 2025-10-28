import SidebarMain from "@/components/SidebarMain/SidebarMain";
import { DialogRegisterProduct } from "./components/DialogRegisterProduct/DialogRegisterProduct";
import SearchBar from "./components/SearchBar/SearchBar";
import { TableProducts } from "./components/TableProducts/TableProducts";

import { Box } from "lucide-react";
export default function ProductPage() {
  return (
    <main className="main-product-page flex bg-[#F8F7F9] h-full  items-center justify-start w-full ">
      <SidebarMain />

      <section className="product-actions-area bg-[#F8F7F9] flex  justify-center w-[100%] h-[100vh]">
        <div className="header-product-page-and-search  p-2  h-[25%] flex flex-row flex-wrap gap-1  justify-start ">
          <div className="header-title flex flex-col justfy-start items-start ">
            <h1 className="text-3xl font-bold pt-10 flex gap-2 items-center justify-start">
              <Box size={35} color="#3066FA" /> Produtos
            </h1>
            <small className="text-gray-600">
              Gerencie seu catálogo de produtos e controle de estoque
            </small>
          </div>
          <div className="dialog-component relative left-[70%] top-15">
            <DialogRegisterProduct  />
          </div>
          <section className="search-card bg-[#FFFFFF] h-[10vh] w-[85vw] p-5 flex items-center justify-start mt-2 rounded-2xl border border-gray-200">
            <SearchBar />
          </section>
          <section className="product-list-area bg-[#FFFFFF] h-[60vh] w-[100%] p-5 flex flex-col items-start justify-start mt-5 rounded-2xl border border-gray-200">
              <div className="product-list-header mb-8">
                <h1 className="product-list-title font-bold text-2xl">
                  Lista de Produtos
                </h1>
                <small className="product-list-subtitle text-gray-600 ">
                  1 Produto(s) encontrado(s)
                </small>
              </div>
              <TableProducts/>
          </section>
        </div>
      </section>
    </main>
  );
}
