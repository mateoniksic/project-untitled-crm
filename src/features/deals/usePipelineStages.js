import { useQuery } from '@tanstack/react-query';
import { getPipelineStages as getPipelineStagesApi } from '../../services/apiPipelineStage';

function usePipelineStages() {
  const {
    data: pipelineStages,
    isLoading: isLoadingPipelineStages,
    error: pipelineStagesError,
  } = useQuery({
    queryKey: ['pipeline_stages'],
    queryFn: getPipelineStagesApi,
  });

  return {
    pipelineStages,
    isLoadingPipelineStages,
    pipelineStagesError,
  };
}

export { usePipelineStages };
