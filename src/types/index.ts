import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


// Service interface definition
export interface Service {
  id: string;
  displayNumber: string;
  title: string;
  description: string;
  imageSrc: string;
}

// Sample service content
export const servicesContent: Service[] = [
  {
    id: 'it-integration',
    displayNumber: '01',
    title: 'ИТ-Интеграция',
    description:
      'Аудит и оценка текущей ИТ-инфраструктуры, проектирование и разработка решений, формирование спецификаций и поставка оборудования, внедрение и настройка, обучение персонала, техническая поддержка и обслуживание.',
    imageSrc: '/image-1.png',
  },
  {
    id: 'info-security',
    displayNumber: '02',
    title: 'Информационная безопасность',
    description:
      'Обеспечение критической информационной инфраструктуры, разработка и внедрение комплексных систем обеспечения информационной безопасности, разработку и внедрение подсистем межсетевого экранирования, обнаружения и предотвращения вторжений, а также систем мониторинга событий и расследования инцидентов.',
    imageSrc: '/image-2.png',
  },
  {
    id: 'industrial-software',
    displayNumber: '03',
    title: 'Промышленное ПО',
    description:
      'Мы занимаемся реализацией систем управления технологическими процессами (MES) на платформах 1С и ZIIoT, а также автоматизацией управленческих и технологических процессов (АСУТП). Кроме того, мы внедряем системы предиктивной аналитики на основе технологий Python, Flask и scikit-learn.',
    imageSrc: '/image-1.png',
  },
];
