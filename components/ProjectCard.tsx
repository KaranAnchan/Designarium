"use client";

import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
          alt="Project Image"
        />
        <div className="hidden group-hover:flex profile_card-title">
          <p>{title}</p>
        </div>
      </Link>
      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-4">
            <Image
              src={avatarUrl}
              width={30}
              height={30}
              className="rounded-full"
              alt="Profile Image"
            />
            <p className="text-base">{name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={20} height={19} alt="heart" />
            <p className="text-base">525</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={20} height={19} alt="eye" />
            <p className="text-base">5.2k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
