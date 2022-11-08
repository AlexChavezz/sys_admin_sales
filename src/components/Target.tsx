import { Link } from 'react-router-dom';
interface TargetProps {
    title: "ADMINISTRACION" | "VENTAS" | null,
    srcImage: string,
    altImage: string,
    targetStyles: string,
    imgStyles: string,
    titleStyles: string,
    onClick: (string: "VENTAS" | "ADMINISTRACION" | null) => void
}

export const Target = ({ altImage, imgStyles, srcImage, targetStyles, title, titleStyles, onClick }: TargetProps) => {
    return (
        <Link to={"/auth"}>
            <article
                className={targetStyles}
                onClick={() => onClick(title)}
            >
                <img
                    src={srcImage}
                    alt={altImage}
                    className={imgStyles}
                />
                <h3 className={titleStyles}>{title}</h3>
            </article>
        </Link>
    );
}