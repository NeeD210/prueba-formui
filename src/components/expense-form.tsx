'use client'

import * as React from "react"
import { useState } from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"

const paymentMethods = [
  { label: "Efectivo", value: "efectivo" },
  { label: "Tarjeta 1", value: "tarjeta1" },
  { label: "Tarjeta 2", value: "tarjeta2" },
]

const installments = [1, 3, 6, 12, 18]

const categories = [
  { label: "Alimentación", value: "alimentacion" },
  { label: "Transporte", value: "transporte" },
  { label: "Entretenimiento", value: "entretenimiento" },
  { label: "Salud", value: "salud" },
  { label: "Educación", value: "educacion" },
  { label: "Otros", value: "otros" },
]

export function ExpenseFormComponent() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [installment, setInstallment] = useState("1")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Reset form
    setDate(undefined)
    setPaymentMethod("")
    setInstallment("1")
    setCategory("")
    setDescription("")
    setAmount("")
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-pink-50 rounded-lg shadow-lg">
      <div className="space-y-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground",
                "bg-secondary hover:bg-secondary/80" // Added background
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: es }) : <span>Fecha</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="flex gap-2">
          <Select value={paymentMethod} onValueChange={setPaymentMethod}>
            <SelectTrigger className="w-[200px] bg-secondary"> {/* Added background */}
              <SelectValue placeholder="Forma de pago" />
            </SelectTrigger>
            <SelectContent>
              {paymentMethods.map((method) => (
                <SelectItem key={method.value} value={method.value}>
                  {method.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={installment} onValueChange={setInstallment}>
            <SelectTrigger className="w-[120px] bg-secondary"> {/* Added background */}
              <SelectValue placeholder="N° cuotas" />
            </SelectTrigger>
            <SelectContent>
              {installments.map((number) => (
                <SelectItem key={number} value={number.toString()}>
                  {number} cuota{number !== 1 ? 's' : ''}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full bg-secondary"> {/* Added background */}
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Input
          placeholder="$$$"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <Button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Cargando..." : "CARGAR"}
        </Button>
      </div>
    </form>
  )
}