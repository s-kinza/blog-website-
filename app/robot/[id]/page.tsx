// import { robots } from "@/lib/robot-data";
// import { notFound } from "next/navigation";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { CalendarDays, Robot } from "lucide-react";
// import { MagicContainer } from "@/components/ui/magic-container";
// import { Metadata } from "next";
// import RobotDetails from "@/components/RobotDetails";
// import CommentSection from "@/components/CommentSection";

// interface Props {
//   params: { id: string };
// }

// export async function generateStaticParams() {
//   return robots.map((robot) => ({
//     id: robot.id,
//   }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const robot = robots.find((r) => r.id === params.id);
  
//   if (!robot) {
//     return {
//       title: 'Robot Not Found',
//     };
//   }

//   return {
//     title: robot.name,
//     description: robot.description,
//   };
// }

// export default function RobotPage({ params }: Props) {
//   const robot = robots.find((r) => r.id === params.id);

//   if (!robot) {
//     notFound();
//   }

//   return (
//     <MagicContainer>
//       <article className="max-w-4xl mx-auto px-4 py-12">
//         <div className="relative h-[50vh] mb-12 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <Robot className="w-48 h-48 text-primary opacity-80" />
//           </div>
//           <img
//             src={robot.image}
//             alt={robot.name}
//             className="w-full h-full object-cover opacity-60 mix-blend-overlay"
//           />
//         </div>

//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-4">
//             <Avatar>
//               <AvatarImage src={robot.creator.avatar} />
//               <AvatarFallback>{robot.creator.name[0]}</AvatarFallback>
//             </Avatar>
//             <div>
//               <p className="font-medium">{robot.creator.name}</p>
//               <div className="flex items-center text-sm text-muted-foreground">
//                 <CalendarDays className="mr-2 h-4 w-4" />
//                 {new Date(robot.createdAt).toLocaleDateString()}
//               </div>
//             </div>
//           </div>
//         </div>

//         <h1 className="text-4xl md:text-5xl font-bold mb-6">{robot.name}</h1>
//         <RobotDetails robot={robot} />
//         <CommentSection robotId={robot.id} comments={robot.comments} />
//       </article>
//     </MagicContainer>
//   );
// }



import { robots } from "@/lib/robot-data";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Bot } from "lucide-react";
import { MagicContainer } from "@/components/ui/magic-container";
import { Metadata } from "next";
import RobotDetails from "@/components/RobotDetails";


interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return robots.map((robot) => ({
    id: robot.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const robot = robots.find((r) => r.id === params.id);
  
  if (!robot) {
    return {
      title: 'Robot Not Found',
    };
  }

  return {
    title: robot.name,
    description: robot.description,
  };
}

export default function RobotPage({ params }: Props) {
  const robot = robots.find((r) => r.id === params.id);

  if (!robot) {
    notFound();
  }

  return (
    <MagicContainer>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative h-[50vh] mb-12 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <Bot className="w-48 h-48 text-primary opacity-80" />
          </div>
          <img
            src={robot.image}
            alt={robot.name}
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={"robot.creator.avatar"} />
              <AvatarFallback>{"robot.creator.name[0]"}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{"robot.creator.name"}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="mr-2 h-4 w-4" />
                {new Date("robot.createdAt").toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{robot.name}</h1>
        <RobotDetails robot={robot} />
        
      </article>
    </MagicContainer>
  );
}
