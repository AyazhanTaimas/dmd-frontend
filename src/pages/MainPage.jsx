import "../styles/MainPage.css";

const MainPage = () => {
    const news = [
        {
            date: "2 Марта, 2025 21:00",
            title: "КБТУ строит новое общежитие: что ждать студентам?",
            text: "Казахстанско-Британский технический университет (КБТУ) объявил о начале строительства нового общежития для студентов. Этот проект обещает решить проблему нехватки мест проживания и повысить комфорт учащихся.",
        },
        {
            date: "28 Февраля, 2025 23:00",
            title: "КБТУ расширяет кампус: новое общежитие для студентов",
            text: "КБТУ делает очередной шаг к улучшению студенческой инфраструктуры — в скором времени планируется строительство нового общежития.",
        },
    ];

    return (
        <main className="content">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="main-title">ГЛАВНОЕ ОБЪЯВЛЕНИЕ</h1>
            </div>

            {/* Заголовок новостей отдельно */}
            <h2 className="news-heading">Новости</h2>

            {news.map((item, index) => (
                <section key={index} className="news-section">


                    <div className="news-text">
                        <p className="news-date">{item.date}</p>
                        <h3 className="news-title">{item.title}</h3>
                        <p className="text-gray-600">{item.text}</p>
                    </div>
                    <div className="news-image"></div>

                </section>
            ))}
        </main>
    );


};

export default MainPage;
