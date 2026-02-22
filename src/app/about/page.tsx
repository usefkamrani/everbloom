import Image from "next/image";
import React from "react";

const stats = [
  { value: "+12k", label: "مشتری همراه" },
  { value: "98%", label: "رضایت خرید" },
  { value: "24h", label: "پشتیبانی پاسخ‌گو" },
  { value: "+150", label: "گیاه منتخب" },
];

const values = [
  {
    title: "کیفیت بی‌تعارف",
    desc: "از انتخاب گیاه تا بسته‌بندی، استانداردهای دقیق و کنترل کیفیت چندمرحله‌ای.",
  },
  {
    title: "طراحی برای زندگی مدرن",
    desc: "ترکیب سادگی، زیبایی و نگهداری آسان برای فضاهای شهری.",
  },
  {
    title: "مسئولیت‌پذیری سبز",
    desc: "ارسال هوشمند، کاهش دورریز و آموزش نگهداری درست برای عمر طولانی گیاه.",
  },
  {
    title: "آموزش و همراهی",
    desc: "راهنمایی قدم‌به‌قدم و پشتیبانی تا گیاهان شما همیشه سرحال بمانند.",
  },
];

const timeline = [
  {
    title: "انتخاب هوشمند",
    desc: "بر اساس نور، فضا و سبک زندگی، بهترین گزینه‌ها را پیشنهاد می‌دهیم.",
  },
  {
    title: "آماده‌سازی حرفه‌ای",
    desc: "هر گیاه قبل از ارسال بررسی سلامت و شرایط رشد می‌شود.",
  },
  {
    title: "تحویل ایمن",
    desc: "بسته‌بندی اختصاصی و ارسال سریع برای رسیدن بدون آسیب.",
  },
];

const team = [
  { name: "نوشین فرهادی", role: "مدیر محصول" },
  { name: "پارسا رستمی", role: "طراح تجربه کاربر" },
  { name: "هانیه کریمی", role: "کارشناس نگهداری گیاه" },
  { name: "مانی مرادی", role: "مدیر عملیات" },
];

const AboutPage = () => {
  return (
    <div className="w-lvw overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 lg:px-12 xl:px-[8vw] pt-10 lg:pt-14 pb-16">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-accentPrimary/20 blur-3xl rounded-full" />
        <div className="absolute top-20 -right-32 w-[420px] h-[420px] bg-accentSecondary/10 blur-3xl rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-tight">
                اوربلوم، آرامش سبز برای زندگی شهری
              </h1>
              <p className="text-lg lg:text-xl mt-4">
                ما به ساده‌تر کردن نگهداری گیاهان آپارتمانی باور داریم؛ از
                انتخاب دقیق تا آموزش و پشتیبانی، همه‌چیز برای شکوفا شدن فضای
                شما طراحی شده است.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/shop"
                className="h-12 px-6 rounded-lg bg-accentSecondary text-bgPrimary font-semibold flex items-center justify-center"
              >
                شروع خرید
              </a>
              <a
                href="/"
                className="h-12 px-6 rounded-lg border border-accentSecondary/40 text-accentSecondary flex items-center justify-center"
              >
                مشاهده صفحه اصلی
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-bgSecondary/70 border border-accentSecondary/15 rounded-xl p-3 text-center"
                >
                  <h2 className="text-2xl text-accentSecondary">{stat.value}</h2>
                  <p className="text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-[320px] lg:h-[420px]">
            <Image
              src="/plants/landing-section2-plant.png"
              alt="گیاهان آپارتمانی اوربلوم"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute -bottom-6 right-4 bg-bgSecondary/80 border border-accentSecondary/20 rounded-xl p-4 w-[260px]">
              <h3 className="text-lg text-accentSecondary">هدف ما</h3>
              <p className="text-sm">
                ساختن تجربه‌ای آرام، الهام‌بخش و پایدار برای زندگی مدرن.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 lg:px-12 xl:px-[8vw] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-bgSecondary/70 border border-accentSecondary/15 rounded-2xl p-6 lg:p-8">
            <h2 className="text-3xl mb-4">داستان اوربلوم</h2>
            <p className="text-lg leading-8">
              اوربلوم از یک دغدغه ساده شروع شد: چرا نگهداری گیاهان باید سخت باشد؟
              ما با جمعی از دوستداران طبیعت و طراحان تجربه کاربری، مسیر خرید،
              آموزش و مراقبت از گیاهان را بازطراحی کردیم تا هر خانه‌ای بتواند
              نفس تازه بکشد.
            </p>
          </div>
          <div className="bg-bgSecondary/70 border border-accentSecondary/15 rounded-2xl p-6 lg:p-8">
            <h2 className="text-3xl mb-4">ماموریت ما</h2>
            <p className="text-lg leading-8">
              ماموریت ما ساده است: انتخاب آگاهانه، نگهداری آسان و تجربه خرید
              مطمئن. از فیلترهای هوشمند تا بسته‌بندی حرفه‌ای، تمام جزئیات برای
              آرامش شما طراحی شده‌اند.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-12 xl:px-[8vw] py-10">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl">ارزش‌های ما</h2>
            <p className="text-lg mt-2">
              چارچوب‌هایی که هر تصمیم در اوربلوم بر اساس آن شکل می‌گیرد.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-bgSecondary/70 border border-accentSecondary/15 rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-full bg-accentPrimary/30 flex items-center justify-center text-accentSecondary font-bold">
                  *
                </div>
                <h3 className="text-xl mt-4 text-txtPrimary">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 lg:px-12 xl:px-[8vw] py-10">
        <div className="bg-bgSecondary/70 border border-accentSecondary/15 rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <h2 className="text-3xl">مسیر همراهی ما</h2>
              <p className="text-lg mt-2">
                از انتخاب تا مراقبت، هر مرحله با دقت طراحی شده است.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 grow">
              {timeline.map((step, index) => (
                <div
                  key={step.title}
                  className="border border-accentSecondary/15 rounded-xl p-4 bg-bgPrimary/40"
                >
                  <div className="text-accentSecondary text-2xl font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg text-txtPrimary mt-2">{step.title}</h3>
                  <p className="text-sm mt-2 leading-7">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 lg:px-12 xl:px-[8vw] py-10">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl">تیم اوربلوم</h2>
            <p className="text-lg mt-2">
              تیمی کوچک اما دقیق که عاشق گیاهان و تجربه کاربری است.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-bgSecondary/70 border border-accentSecondary/15 rounded-2xl p-5 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accentPrimary/30 flex items-center justify-center text-2xl text-accentSecondary font-bold">
                  {member.name.slice(0, 1)}
                </div>
                <h3 className="text-lg text-txtPrimary mt-3">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 xl:px-[8vw] pt-6 pb-16">
        <div className="relative overflow-hidden bg-bgSecondary/80 border border-accentSecondary/20 rounded-2xl p-8 lg:p-10">
          <div className="absolute -top-24 left-0 w-48 h-48 bg-accentSecondary/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 right-0 w-48 h-48 bg-accentPrimary/30 blur-3xl rounded-full" />
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl">آماده‌ای خانه‌ات را سبز کنی؟</h2>
              <p className="text-lg mt-2">
                مجموعه گیاهان منتخب اوربلوم را ببین و انتخابت را شروع کن.
              </p>
            </div>
            <a
              href="/shop"
              className="h-12 px-8 rounded-lg bg-accentSecondary text-bgPrimary font-semibold flex items-center justify-center"
            >
              رفتن به فروشگاه
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
