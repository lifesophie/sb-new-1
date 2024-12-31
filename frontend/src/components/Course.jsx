import React, { useEffect, useState } from "react";
import { fetchTypeCourses } from '../api'; // Импортируем функцию из api.js
import '../styles/Course.css'; // Подключаем стили
import { Link } from "react-router-dom";

const Course = () => {
    const [typeCourses, setTypeCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const response = await fetchTypeCourses();
                console.log('response.data', response); // <--- Проверяем response.data

                if (Array.isArray(response)) {
                    setTypeCourses(response);
                } else {
                    console.error('Data is not an array', response);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError(error.message);
            }
        };

        loadCourses();
    }, []);

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    return (
        <div className="type-of-course">
            <ul className="breadcrumb">
                <li><Link to="/">Главная</Link></li>
                <li className="red-text">Курсы</li>
            </ul>
            <div className="container-type-of-course">
                {typeCourses.length > 0 ? (
                    typeCourses.map((course) => (
                        <div key={course.id} className="block-1-blue">
                            <div className="desc">{course.name}</div>
                            <Link to={`/course/${course.name.toLowerCase()}`}><button className="button-more">Подробнее</button></Link>
                        </div>
                    ))
                ) : (
                    <div>Загрузка данных...</div>
                )}
            </div>
        </div>
    );
};

export default Course;