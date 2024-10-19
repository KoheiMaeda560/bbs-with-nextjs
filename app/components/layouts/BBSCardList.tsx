import React from "react";
import Link from "next/link";
import BBSCard from "./BBSCard";
import { BBSData } from "@/app/types/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BBSDataAllProps {
  bbsAllData: BBSData[];
}

export const BBSCardList = ({ bbsAllData }: BBSDataAllProps) => {
  return (
    <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      {bbsAllData.map((bbsData: BBSData) => (
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </div>
  );
};
