import React from 'react';
import AdminNavbar from '../../component/NavBar/AdminNavbar';
import './AdminHelp.css';

const AdminHelp = () => {
  return (
    <div className="admin-help-container">
      <AdminNavbar />
      <div className="admin-help-content">
        <h1>مساعدة المدير</h1>
        
        <section>
          <h2>إرشادات الاستخدام</h2>
          <p>هنا ستجد إرشادات حول كيفية استخدام لوحة التحكم لإدارة المواد الدراسية والفترات والدروس.</p>
          <ol>
            <li>لإضافة مادة جديدة، اذهب إلى قسم "إدارة المواد" وأدخل اسم المادة ثم اضغط على زر "إضافة المادة".</li>
            <li>لإضافة فترة لمادة، اختر المادة من القائمة ثم اذهب إلى قسم "إدارة الفترات" وأدخل اسم الفترة واضغط على زر "إضافة الفترة".</li>
            <li>لإضافة درس لفترة، اختر الفترة من القائمة ثم اذهب إلى قسم "إدارة الدروس" وأدخل تفاصيل الدرس (الاسم، رابط الفيديو، ورابط PowerPoint) ثم اضغط على زر "إضافة الدرس".</li>
          </ol>
        </section>
        
        <section>
          <h2>الأسئلة الشائعة</h2>
          <div className="faq-item">
            <h3>كيف يمكنني تعديل مادة موجودة؟</h3>
            <p>لتعديل مادة موجودة، اذهب إلى قسم "إدارة المواد"، اختر المادة التي تريد تعديلها، ثم قم بتعديل اسم المادة في الحقل المخصص لذلك.</p>
          </div>
          <div className="faq-item">
            <h3>كيف يمكنني حذف فترة؟</h3>
            <p>لحذف فترة، اختر المادة التي تحتوي على الفترة، ثم اذهب إلى قسم "إدارة الفترات" واضغط على زر "حذف" بجانب الفترة التي تريد حذفها.</p>
          </div>
          <div className="faq-item">
            <h3>كيف يمكنني إضافة درس جديد؟</h3>
            <p>لإضافة درس جديد، اختر المادة والفترة التي تريد إضافة الدرس لها، ثم اذهب إلى قسم "إدارة الدروس" وأدخل تفاصيل الدرس واضغط على زر "إضافة الدرس".</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHelp;
