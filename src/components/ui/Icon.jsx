import {
  Award,
  Bot,
  Briefcase,
  Code,
  Database,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Server,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'
import BrandIcon from './BrandIcon'

const iconMap = {
  Award,
  Bot,
  Briefcase,
  Code,
  Database,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Server,
  ShieldCheck,
  Users,
  Wrench,
  Zap,
}

export default function Icon({ name, ...props }) {
  if (name === 'Github' || name === 'Gitlab' || name === 'Linkedin') {
    return <BrandIcon name={name} {...props} />
  }
  const Component = iconMap[name]
  if (!Component) return null
  return <Component {...props} />
}