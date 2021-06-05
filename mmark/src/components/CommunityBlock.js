import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { withCookies, useCookies } from 'react-cookie';
import Sheet from './Sheet';

const CommunityBlock = ({articles, users, tags}) => {
    const [Cookie, setCookie, removeCookie] = useCookies(['token', 'name']);
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

    const handleOnClick = function (e) {
        const descButtonWrapper = e.target;
        const descriptionWrapper = e.target.parentNode.parentNode.parentNode.lastChild;
        if (descButtonWrapper.classList.contains("show")) {
            descButtonWrapper.classList.remove("show");
            descButtonWrapper.classList.add("hide");
            descriptionWrapper.classList.remove("hidden");
            descButtonWrapper.innerText = t("community.hide_description");
        } else if (descButtonWrapper.classList.contains("hide")) {
            descButtonWrapper.classList.remove("hide");
            descButtonWrapper.classList.add("show");
            descButtonWrapper.innerText = t("community.show_description");
            descriptionWrapper.classList.add("hidden");
        }
    }

    const handleDelete = (e) => {
        const articleId = e.target.parentNode.getAttribute('value');
        e.preventDefault();
        fetch(`http://3.36.217.44:8000/plz`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
            },
          body: articleId
        })
    }

    return (
        <div className="listWrapper">
            {articles.map(item => (
                <div key={item.id} className={`itemWrapper ${Cookie.name == item.author_name ? "mine" : ""}`}>
                    <div className={`authorWrapper`}>
                        <div className="authorProfilePic"></div>
                        <div className="authorSub">
                            <div className="authorName">{item.author_name !== undefined ? item.author_name : "Anonymous"}</div>
                            {Cookie.name == item.author_name ?
                                <div className="deleteButton" onClick={handleDelete} value={item.id}>
                                    <svg version="1.1" id="Capa_1" x="0px" y="0px"
                                        width="30px" height="30px" viewBox="0 0 482.428 482.429" >
                                        <g>
                                            <g>
                                            <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                                            c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                                            h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                                            C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                                            C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                                            c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                                            c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                                            V115.744z"/>
                                            <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
                                            c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                                            <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
                                            c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                                            <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
                                            c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div> 
                            : ""}
                        </div>
                    </div>
                    <div className="titleWrapper">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="titleSub">
                            <div className="date">{handleDate(item)}</div>
                            {Cookie.name == item.author_name ?
                                <div className="editWrapper">
                                    <svg version="1.1" id="Layer_1" x="0px" y="0px" height="1.25rem" width="1.25rem" viewBox="0 0 512 512">
                                        <g>
                                            <g>
                                                <path d="M403.914,0L54.044,349.871L0,512l162.128-54.044L512,108.086L403.914,0z M295.829,151.319l21.617,21.617L110.638,379.745
                                                    l-21.617-21.617L295.829,151.319z M71.532,455.932l-15.463-15.463l18.015-54.043l51.491,51.491L71.532,455.932z M153.871,422.979
                                                    l-21.617-21.617l206.809-206.809l21.617,21.617L153.871,422.979z M382.297,194.555l-64.852-64.852l21.617-21.617l64.852,64.852
                                                    L382.297,194.555z M360.679,86.468l43.234-43.235l64.853,64.853l-43.235,43.234L360.679,86.468z"/>
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="editButton">Edit</div>
                                </div>
                            : ""}
                        </div>
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
                            <div className="descButtonWrapper" id="descButtonWrapper">
                                <div className="descButtonText show" onClick={e => { handleOnClick(e); }}>
                                    {t("community.show_description")}
                                </div>
                            </div>
                        </div>
                        <div className="descriptionWrapper hidden" id="descriptionWrapper">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommunityBlock;