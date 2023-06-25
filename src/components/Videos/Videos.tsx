import { useState, MouseEvent } from 'react';

import { PaginationNumber } from "../PaginationNumbers/PaginationNumbers";
import { FilterCard } from "../FilterCard/FilterStyled";
import { TextStyled, } from "../Text/TextStyled";
import { Select } from "../Select/SelectStyled";
import { Line } from "../Line/LineStyled";

import { ContainerVideos, WrapperVideos, WrapperFilters, WrapperCards, WrapperSelect, WrapperPagination } from "./VideosStyled";

type CardObject = {
    name: string,
}

const VideosSection = () => {

    const [cardId, setCardId] = useState<number>(3);
    const [paginationId, setPaginationId] = useState<number>(2);

    const FilterCards: CardObject[] = [
        { name: 'Agências' },
        { name: 'ChatBot' },
        { name: 'Marketing Digital' },
        { name: 'Geração de Leads' },
        { name: 'Mídia paga' }
    ]

    const videoArrayLength = 36; //dinamic
    const videosPerPage = 9;
    const totalPages = Math.ceil(videoArrayLength / videosPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

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
                        <TextStyled align='center' size='1rem'>Ordenar por</TextStyled>
                        <Select> {/* Select é normalmente usado de alguma biblioteca, nesse caso simples usado do browser por não saber as especificações */}
                            <option>Data de publicação</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Select>
                    </WrapperSelect>
                </WrapperFilters>
                <Line width='100%' margin='20px 0px' />
                <p>TODO: Videos</p>
                <Line width='100%' margin='20px 0px' />
                <WrapperPagination
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
                                id={`${i}`}
                                className={paginationId === i ? 'active' : ''}
                                onClick={HandlePaginationClick}
                            >
                                {pageNumber}
                            </PaginationNumber>
                        ))
                    }
                </WrapperPagination>
            </WrapperVideos>
        </ContainerVideos>
    );
}

export default VideosSection;