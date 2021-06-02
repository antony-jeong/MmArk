import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Sheet from './Sheet';


const CommunityBlock = ({articles, users, tags}) => {

    const { t, i18n } = useTranslation();
    
    for (var i=0; i<articles.length; i++) {
        const raw_time = articles[i].modified_time.toString();
        articles[i].year = raw_time.split("T")[0].split("-")[0];
        articles[i].month = raw_time.split("T")[0].split("-")[1];
        articles[i].date = raw_time.split("T")[0].split("-")[2];
        articles[i].hour = raw_time.split("T")[1].split(".")[0].split(":")[0];
        articles[i].minute = raw_time.split("T")[1].split(".")[0].split(":")[1];
        articles[i].second = raw_time.split("T")[1].split(".")[0].split(":")[2];
        articles[i].time = parseInt(articles[i].year) * 3600 * 24 * 31 * 12 + parseInt(articles[i].month) * 3600 * 24 * 31 + parseInt(articles[i].date) * 3600 * 24 + parseInt(articles[i].hour) * 3600 + parseInt(articles[i].minute) * 60 + parseInt(articles[i].second);
        articles[i].author = users[articles[i].author];

        console.log(
            articles[i].title,
            articles[i].year,
            articles[i].month,
            articles[i].date,
            articles[i].hour,
            articles[i].minute,
            articles[i].second,
            articles[i].time
        )
    }
    
    articles.sort(((a, b) => a.time > b.time ? -1 : 1))
    
    const handleDate = (e) => {
        const now = new Date()
        const date = new Date(e.year, e.month-1, e.date, e.hour, e.minute, e.second);
        const milDif = now.valueOf() - date.valueOf();

        if (Math.floor(milDif/1000) === 1) {
            return Math.floor(milDif/1000) + t("community.second_singular")
        } else if (Math.floor(milDif/1000) < 60) {
            return Math.floor(milDif/1000) + t("community.second_plural")
        } else if (Math.floor(milDif/60000) === 1) {
            return Math.floor(milDif/60000) + t("community.minute_singular")        
        } else if (Math.floor(milDif/60000) < 60) {
            return Math.floor(milDif/60000) + t("community.minute_plural")
        } else if (Math.floor(milDif/3600000) === 1) {
            return Math.floor(milDif/3600000) + t("community.hour_singular")
        } else if (Math.floor(milDif/3600000) < 24) {
            return Math.floor(milDif/3600000) + t("community.hour_plural")
        } else if (Math.floor(milDif/24/3600000) === 1) {
            return t("community.day_singular")
        } else if (Math.floor(milDif/24/3600000) < 30) {
            return Math.floor(milDif/24/3600000) + t("community.day_plural")
        } else if (Math.floor(milDif/30/24/3600000) === 1) {
            return t("community.month_singular")
        } else if (Math.floor(milDif/30/24/3600000) < 12) {
            return Math.floor(milDif/30/24/3600000) + t("community.month_plural")
        } else if (Math.floor(milDif/12/30/24/3600000) === 1) {
            return t("community.year_singular")
        } else if (Math.floor(milDif/12/30/24/3600000) > 1) {
            return Math.floor(milDif/12/30/24/3600000) + t("community.year_plural")
        }

        return "Something Went Wrong";
    }

    return (
        <div className="listWrapper">
            {articles.map(item => (
                    <div key={item.id} className="itemWrapper">
                        <div className="authorWrapper"><div className="authorProfilePic"></div><div className="authorName">{item.author !== undefined? item.author.username : "Anonymous"}</div></div>
                        <div className="titleWrapper">
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="date">{handleDate(item)}</div>
                        </div>
                        <div className="descWrapperWrapper">
                            <div className="descWrapper">
                                <div className="sheetWrapper">
                                    <Sheet dataStructure={JSON.parse(item.sheet_ds)}></Sheet>
                                </div>
                                <div className="favWrapper">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_i)">
                                        <path d="M9.08315 1.07608C9.5501 -0.267258 11.4499 -0.267259 11.9168 1.07608L13.3313 5.14538C13.5373 5.73799 14.0904 6.13979 14.7176 6.15257L19.0249 6.24035C20.4467 6.26933 21.0338 8.07614 19.9005 8.93535L16.4675 11.5381C15.9675 11.9171 15.7563 12.5673 15.938 13.1678L17.1855 17.2913C17.5973 18.6526 16.0604 19.7692 14.893 18.9569L11.3568 16.4962C10.8418 16.1378 10.1582 16.1378 9.64323 16.4962L6.10701 18.9569C4.93965 19.7692 3.40268 18.6526 3.81451 17.2913L5.06204 13.1678C5.24371 12.5673 5.03247 11.9171 4.53252 11.5381L1.09949 8.93535C-0.0338099 8.07614 0.553262 6.26932 1.97515 6.24035L6.28239 6.15257C6.90964 6.13979 7.46268 5.73799 7.66867 5.14538L9.08315 1.07608Z" fill="#E2E3EC"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_i" x="0.50293" y="0.0686035" width="20.9939" height="20.1633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="1" dy="1"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                                        </filter>
                                        </defs>
                                    </svg>
                                    <div className="favNum">{item.total_favorites.length}</div>
                                </div>
                                <div className="tagWrapper">{item.tags.length > 0 ? item.tags.map(i => (
                                    <div className="tag">#{tags[i - 1] != undefined ? tags[i - 1].name + " " : ""}</div>
                                    )) : ""}
                                </div>
                                <div className="descButtonWrapper">
                                    <div className="descButtonText">
                                        Show Description  ▽
                                    </div>
                                </div>
                            </div>
                            <div className="descriptionWrapper hidden">Desc: {item.description}</div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CommunityBlock;