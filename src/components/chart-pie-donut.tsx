"use client"

import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { category: "Categoria 1", amount: 275, fill: "rgba(190, 75, 219, 0.7)" },
  { category: "Categoria 2", amount: 200, fill: "rgba(121, 40, 202, 0.7)" },
  { category: "Categoria 3", amount: 187, fill: "rgba(72, 31, 184, 0.7)" },
  { category: "Categoria 4", amount: 173, fill: "rgba(67, 97, 238, 0.7)" },
]

const chartConfig = {
  amount: {
    label: "Monto",
  },
  "Categoria 1": {
    label: "Categoria 1",
    color: "rgba(190, 75, 219, 0.7)",
  },
  "Categoria 2": {
    label: "Categoria 2",
    color: "rgba(121, 40, 202, 0.7)",
  },
  "Categoria 3": {
    label: "Categoria 3",
    color: "rgba(72, 31, 184, 0.7)",
  },
  "Categoria 4": {
    label: "Categoria 4",
    color: "rgba(67, 97, 238, 0.7)",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-2">
        <CardTitle className="text-2xl font-bold">Gastos del Mes</CardTitle>
        <Select defaultValue="january-june-2024">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Seleccionar período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="january-june-2024">Enero - Junio 2024</SelectItem>
            <SelectItem value="july-december-2024">Julio - Diciembre 2024</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              cornerRadius={8}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}