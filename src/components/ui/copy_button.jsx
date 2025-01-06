'use client'

import { useState } from 'react'
import { Copy, Check } from "lucide-react";

export default function CopyButton({text}) {
    const [copied, setCopied] = useState(false);
    const f = () => {
        navigator.clipboard.writeText(text);
        setCopied(true)
        setTimeout(()=> {
            setCopied(false)
        }, 3000)
    }
    return (
        <button onClick={f} className="absolute right-0 top-0 m-4">
            {copied ? 
                <Check className="stroke-slate-400 hover:stroke-slate-100" /> 
                : <Copy className="stroke-slate-400 hover:stroke-slate-100" />}
        </button>
    );
}
