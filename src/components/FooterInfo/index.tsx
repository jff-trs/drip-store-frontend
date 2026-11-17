import { Link } from "react-router-dom";

interface InfoItem {
  text: string;
  link: string;
}

interface FooterInfoProps {
  title: string;
  informations: InfoItem[];
}

export default function FooterInfo({ title, informations }: FooterInfoProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-white font-bold text-[18px] mb-6">{title}</h3>

      <ul className="flex flex-col">
        {informations.map((info, index) => (
          <li key={index}>
            <Link
              to={info.link}
              className="text-white hover:text-primary transition-colors text-[16px] leading-[38px]"
            >
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
