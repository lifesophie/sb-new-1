import React, { useEffect, useState } from "react";
import { fetchType1Courses, fetchCourses } from '../api'; // Импортируем функции из api.js
import '../styles/CourseList.css';
import { Link } from "react-router-dom";

function CourseList() {
    const [type1Courses, setType1Courses] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCourseType, setSelectedCourseType] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const type1CoursesData = await fetchType1Courses();
                setType1Courses(type1CoursesData);

                const coursesData = await fetchCourses();
                setCourses(coursesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        loadData();
    }, []);

    const handleCourseTypeClick = (courseTypeId) => {
        setSelectedCourseType(courseTypeId);
    };

    const handleResetFilter = () => {
        setSelectedCourseType(null);
    };

    const filteredCourses = selectedCourseType
        ? courses.filter((course) => course.id_type1_course === selectedCourseType)
        : courses;

    return (
        <div className='course-list'>
            <ul className="breadcrumb">
                <li><Link to="/">Главная</Link></li>
                <li className="red-text">Курсы</li>
            </ul>
            <h1>Список курсов</h1>
            <div className='all-course'>
                <div className='sidebar-left'>
                    <div className='type-of-course-left'>
                        <div
                            className={`header-course-one ${selectedCourseType === null ? 'selected' : ''}`}
                            onClick={handleResetFilter}
                        >
                            Повышение квалификации
                        </div>
                        {type1Courses.map((courseType) => (
                            <div
                                key={courseType.id}
                                className={`course-one ${selectedCourseType === courseType.id ? 'selected' : ''}`}
                                onClick={() => handleCourseTypeClick(courseType.id)}
                            >
                                {courseType.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='catalog-of-courses'>
                    {filteredCourses.map((course) => (
                        <div key={course.id} className='one-course'>
                            <div className='header-of-card'>{course.name}</div>
                            <div className='type-education'>Форма обучения: {course.form_edu}</div>
                            <div className='long-education'>Срок обучения: {course.long_edu}</div>
                            <div className='needed-level'>Требуемый уровень: {course.needed_level}</div>
                            <div className='price'>Стоимость курса: {course.price}</div>
                            <Link to={`/onecourse/${course.id}`}>
                                <button className="button-more-courses">Подробнее</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CourseList;
