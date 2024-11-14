"use client"

import React from "react";
import { Button } from "../ui/button";
import { useWalletModalStore } from "@/src/modals/wallet/state";
import { useWalletStore } from "@/src/zustand/wallet";
import ChainHorizontal from "../ChainHorizontal";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const { onModalStateChange } = useWalletModalStore()
    const { isConnected, chain } = useWalletStore()
    return (
        <div className="flex flex-row items-center backdrop-blur-md py-3 px-6 md:mx-60 ">
            <h3 className="text-xl font-extrabold">Fusion Swap</h3>
            <div className="flex-1 flex flex-row items-center justify-end">
                <Button className="text-white" onClick={() => onModalStateChange(true)} >{(isConnected && chain?.chain_uid) ?
                    <div className="flex flex-row items-center gap-x-2">
                        <ChainHorizontal chain_uid={chain?.chain_uid} />
                        <ChevronDown className="h-4 w-4" />
                    </div> : "Connect Wallet"}</Button>
            </div>
        </div>
    )
}