import TokenSelectorModal from "@/src/modals/token-selector";
import Swap from "@/src/swap";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-14">
      <h1 className="text-4xl font-bold">Fusion Swap</h1>
      <h1 className="mt-10 text-xl font-bold"> Unifying Liquidity, Empowering Decentralization. </h1>
      <Swap />
      <TokenSelectorModal />
    </div>
  );
}
