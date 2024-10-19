import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BBSCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
          <CardDescription>
            Deploy your new project in one click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odio
          eaque, quos nobis veniam ut, eligendi ullam officia impedit totam
          harum eum consequuntur iste nesciunt, assumenda soluta. Ad, sapiente
          perferendis.
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;
