import React from "react";
import Link from "next/link";
import { BBSData } from "@/app/types/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, username, title, content, createAt } = bbsData;
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/bbs-posts/${id}`} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;
