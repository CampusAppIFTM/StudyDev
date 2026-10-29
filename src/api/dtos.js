// DTOs - nunca retornar entidades internas diretamente
export function toCourseResponse(course) {
  return {
    id: course.id,
    title: course.name || course.title,
    description: course.desc || course.description,
    category: course.category || "Programação",
    level: course.level || "Iniciante",
    duration: course.duration || `${(course.content || []).length} aulas`,
    thumbnail: course.thumbnail || null,
    published: course.published ?? true,
  };
}

export function toLessonResponse(lesson, index = 0) {
  return {
    id: lesson.url || `${lesson.type}-${index}`,
    title: lesson.name,
    description: lesson.desc || "",
    videoUrl: lesson.url,
    order: index,
    duration: lesson.duration || null,
  };
}

export function toTrackResponse(track) {
  return {
    id: track.id,
    title: track.name,
    description: track.desc,
    category: track.category || "Geral",
    courseCount: (track.courses || []).length,
    published: track.published ?? true,
  };
}

export function toProgressResponse(progress) {
  return {
    userId: progress.userId,
    courseId: progress.courseId || progress.trilhaId,
    completed: progress.concluidos || [],
    percentage: progress.porcentagem || 0,
    updatedAt: progress.atualizadoEm,
  };
}

export function paginatedResponse(data, page, limit, total) {
  return {
    success: true,
    data,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
}

export function errorResponse(code, message, status = 400) {
  return {
    success: false,
    error: { code, message },
    status,
  };
}
