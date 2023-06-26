import { useState, MouseEvent, useEffect } from 'react';

import Thumbnail from '@/assets/elements/thumbnail.png';

import { FaPlay } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineCloudDownload } from 'react-icons/ai';

import { PaginationNumber } from "../../PaginationNumbers/PaginationNumbers";
import { FilterCard } from "../../FilterCard/FilterStyled";
import { TextStyled, } from "../../Text/TextStyled";
import { Select } from "../../Select/SelectStyled";
import { Line } from "../../Line/LineStyled";

import * as Dialog from '@radix-ui/react-dialog';

import { ContainerVideos, WrapperVideos, WrapperFilters, WrapperCards, WrapperSelect, GridVideos, Video, ThumbnailImage, OverlayImage, PlayButton, DialogOverlay, DialogContent, DialogClose, DialogTitle, DownloadButtons } from "./VideosStyled";
import { Wrapper } from '@/styles/globalStyles/Commom';

type CardObject = {
    name: string,
}

type Video = {
    id: string,
    title: string,
    image: string,
    url: string,
}

const VideosSection = () => {

    const [cardId, setCardId] = useState<number>(3);
    const [paginationId, setPaginationId] = useState<number>(1);

    const [videoId, setVideoId] = useState<number>(1);
    const [isOpen, setIsOpen] = useState(false);

    const FilterCards: CardObject[] = [
        { name: 'Agências' },
        { name: 'ChatBot' },
        { name: 'Marketing Digital' },
        { name: 'Geração de Leads' },
        { name: 'Mídia paga' }
    ]

    const [videos, setVideos] = useState<Video[]>([]);

    const videoArrayLength = videos.length;
    const videosPerPage = 9;
    const totalPages = Math.ceil(videoArrayLength / videosPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    useEffect(() => {
        fetch('./videos.json')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error(error));
    }, []);

    const displayedVideos = videos.slice((paginationId - 1) * videosPerPage, paginationId * videosPerPage);

    const OpenModal = (event: MouseEvent<HTMLDivElement>) => {
        setVideoId(parseInt(event.currentTarget.id));
        setIsOpen(true);
    }

    const CloseModal = () => {
        setVideoId(1);
        setIsOpen(false);
    }

    const HandleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        setCardId(parseInt(event.currentTarget.id));
    }

    const HandlePaginationClick = (event: MouseEvent<HTMLDivElement>) => {
        setPaginationId(parseInt(event.currentTarget.id));
    }

    return (
        <ContainerVideos>
            <WrapperVideos direction="column" align="center" justify='center' width="80%">
                <WrapperFilters align="center" justify='space-between' width='100%'>
                    <WrapperCards
                        width='auto'
                        align="center"
                        justify="center"
                        gap="8px"
                        initial={{ x: -100, opacity: 0.2 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5, type: 'spring', stiffness: 200, damping: 20 },
                        }}
                        viewport={{ once: true }}
                    >
                        {
                            FilterCards.map((filter, i) => (
                                <FilterCard
                                    key={i}
                                    id={`${i}`}
                                    className={cardId === i ? 'active' : ''}
                                    onClick={HandleCardClick}
                                >
                                    {filter.name}
                                </FilterCard>
                            ))
                        }
                    </WrapperCards>
                    <WrapperSelect
                        width='auto'
                        align="center"
                        justify="center"
                        gap='8px'
                        initial={{ x: 100, opacity: 0.2 }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5, type: 'spring', stiffness: 200, damping: 20 },
                        }}
                        viewport={{ once: true }}
                    >
                        <TextStyled textAlign='center' size='1rem'>Ordenar por</TextStyled>
                        <Select> {/* Select é normalmente usado de alguma biblioteca, nesse caso simples usado do browser por não saber as especificações */}
                            <option>Data de publicação</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Select>
                    </WrapperSelect>
                </WrapperFilters>
                <Line width='100%' margin='20px 0px' />
                <GridVideos>
                    {displayedVideos.map((video, i) => (
                        <Video
                            key={i}
                            id={`${i}`}
                            onClick={OpenModal}
                            initial={{ opacity: 0.2 }}
                            whileInView={{
                                opacity: 1,
                                transition: { duration: 0.6 },
                            }}
                            viewport={{ once: true }}
                        >
                            <div style={{ position: 'relative' }}>
                                <OverlayImage className="overlay" />
                                <PlayButton className='play'>
                                    <FaPlay size={"100%"} color='#fff' />
                                </PlayButton>
                                <ThumbnailImage src={Thumbnail} alt='Thumbnail video' widthintern='100%' />
                            </div>
                            <TextStyled size='1rem'>{video.title}</TextStyled>
                        </Video>
                    ))}
                </GridVideos>
                <Dialog.Root open={isOpen} onOpenChange={CloseModal}>
                    <Dialog.Portal>
                        <DialogOverlay />
                        <DialogContent>
                            <DialogClose data-testId="dialog-close-button" asChild>
                                <AiOutlineClose size={16} color='#b6b5b5' />
                            </DialogClose>
                            <DialogTitle size='1rem' weight="700"><span style={{ color: 'var(--main)' }}>Webinar: </span>{videos[videoId]?.title}</DialogTitle>
                            <iframe width="100%" height="300" src={videos[videoId]?.url} />
                            <Wrapper direction='column' align='start' style={{ padding: '20px 12px' }}>
                                <TextStyled size='0.875rem' weight='700'>Descrição</TextStyled>
                                <Line width='100%' margin='8px 0' height='1px' />
                                <TextStyled size='0.875rem' style={{ marginBottom: '16px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptatibus aut</TextStyled>
                                <TextStyled size='0.875rem' weight='700'>Downloads</TextStyled>
                                <Line width='100%' margin='8px 0' height='1px' />
                                <Wrapper gap="4px" style={{ flexWrap: 'wrap' }}>
                                    <DownloadButtons>
                                        <div style={{ backgroundColor: 'rgba(76, 202, 118, 0.6)', borderRadius: '4px 0 0 4px' }}>
                                            <AiOutlineCloudDownload size={16} color="#4cca76" />
                                        </div>
                                        <div style={{ backgroundColor: 'rgba(76, 202, 118, 0.4)', borderRadius: '0 4px 4px 0' }}>
                                            <TextStyled size='0.750rem'>Spreedsheet.xls</TextStyled>
                                        </div>
                                    </DownloadButtons>
                                    <DownloadButtons>
                                        <div style={{ backgroundColor: 'rgba(70, 155, 212, 0.6)', borderRadius: '4px 0 0 4px' }}>
                                            <AiOutlineCloudDownload size={16} color="#469bd4" />
                                        </div>
                                        <div style={{ backgroundColor: 'rgba(70, 155, 212, 0.4)', borderRadius: '0 4px 4px 0' }}>
                                            <TextStyled size='0.750rem'>Document.doc</TextStyled>
                                        </div>
                                    </DownloadButtons>
                                    <DownloadButtons>
                                        <div style={{ backgroundColor: 'rgba(214, 212, 71, 0.6)', borderRadius: '4px 0 0 4px' }}>
                                            <AiOutlineCloudDownload size={16} color="#b9b746" />
                                        </div>
                                        <div style={{ backgroundColor: 'rgba(214, 212, 71, 0.4)', borderRadius: '0 4px 4px 0' }}>
                                            <TextStyled size='0.750rem'>Presentation.ppt</TextStyled>
                                        </div>
                                    </DownloadButtons>
                                </Wrapper>
                            </Wrapper>
                        </DialogContent>
                    </Dialog.Portal>
                </Dialog.Root>
                <Line width='100%' margin='20px 0px' />
                <Wrapper
                    align="center"
                    justify="center"
                    gap="4px"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                >
                    <TextStyled size="1rem" weight='700' style={{ marginRight: '2px' }}>Página</TextStyled>
                    {
                        pageNumbers.map((pageNumber, i) => (
                            <PaginationNumber
                                key={i}
                                id={`${i + 1}`}
                                className={paginationId === i + 1 ? 'active' : ''}
                                onClick={HandlePaginationClick}
                            >
                                {pageNumber}
                            </PaginationNumber>
                        ))
                    }
                </Wrapper>
            </WrapperVideos>
        </ContainerVideos>
    );
}

export default VideosSection;